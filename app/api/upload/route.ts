import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

type Data = {
  url?: string;
  error?: string;
  details?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { file } = req.body;
    const accessToken = req.headers.authorization?.split(' ')[1];

    if (!accessToken) {
      return res.status(401).json({ error: 'Authorization token is missing' });
    }

    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token: accessToken });

    const drive = google.drive({ version: 'v3', auth: oauth2Client });

    try {
      const buffer = Buffer.from(file.split(',')[1], 'base64');

      const response = await drive.files.create({
        requestBody: {
          name: 'uploaded_image.jpg',
          mimeType: 'image/jpeg',
        },
        media: {
          mimeType: 'image/jpeg',
          body: buffer,
        },
      });

      const fileId = response.data.id;
      
      if (!fileId) {
        throw new Error('File ID is missing');
      }

      await drive.permissions.create({
        fileId: fileId,
        requestBody: {
          role: 'reader',
          type: 'anyone',
        },
      });

      const result = await drive.files.get({
        fileId: fileId,
        fields: 'webViewLink, webContentLink',
      });

      const url = result.data.webContentLink;
      
      if (!url) {
        throw new Error('URL is missing from the response');
      }

      res.status(200).json({ url: url });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: 'Error uploading file', details: error.message });
      } else {
        res.status(500).json({ error: 'Error uploading file', details: 'Unknown error' });
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
