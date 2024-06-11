'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase/init';
import { useSession } from 'next-auth/react';

interface Product {
  id?: string;
  title: string;
  location: string;
  price: number;
  originalPrice: number;
  description: string;
  startDate: string;
  imageUrl: string;
  isPromo: boolean;
  category: string;
  purchaseCount: number;
  imageFile?: File | null;
  detailImages: string[];
  detailImageFiles?: File[];
  pesawat: string;
  penginapan: string;
  mobilTravel: string;
  infoTambahan: string;
  [key: string]: any;
}

const Admin = () => {
  const { data: session } = useSession();
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState<Product & { imageFile?: File | null; detailImageFiles?: File[] }>({
    title: '',
    location: '',
    price: 0,
    originalPrice: 0,
    description: '',
    startDate: '',
    imageUrl: '',
    isPromo: false,
    category: '',
    purchaseCount: 0,
    imageFile: null,
    detailImages: [],
    detailImageFiles: [],
    pesawat: '',
    penginapan: '',
    mobilTravel: '',
    infoTambahan: '',
  });
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const productsCollection = collection(db, 'products');
      const productsSnapshot = await getDocs(productsCollection);
      setProducts(productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product)));
    };
    fetchData();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === 'imageFile') {
      const file = files?.[0];
      setForm({ ...form, imageFile: file || null, imageUrl: '' });
    } else if (name === 'detailImageFiles') {
      const detailFiles = Array.from(files || []);
      setForm({ ...form, detailImageFiles: detailFiles });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const getProductData = (product: Product) => {
    const { id, imageFile, detailImageFiles, ...data } = product;
    return data;
  };

  const uploadImageToDrive = async (file: File): Promise<string> => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        try {
          const res = await fetch('/api/upload', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${session?.accessToken}`,
            },
            body: JSON.stringify({ file: reader.result }),
          });
          const data = await res.json();
          if (data.url) {
            resolve(data.url);
          } else {
            reject(new Error('URL is missing from response'));
          }
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let imageUrl = form.imageUrl;
    let detailImages: string[] = [];
  
    if (form.imageFile) {
      try {
        const file = await new Promise<string | ArrayBuffer | null>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = () => reject(reader.error);
          if (form.imageFile) {
            reader.readAsDataURL(form.imageFile);
          }
        });
  
        if (typeof file === 'string') {
          const response = await fetch('/api/upload', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${session?.accessToken}`,
            },
            body: JSON.stringify({ file }),
          });
  
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Error uploading image');
          }
  
          const data = await response.json();
          imageUrl = data.url;
        }
      } catch (error) {
        console.error("Error uploading image: ", error);
        alert("Error uploading image. Please try again.");
        return;
      }
    }
  
    // Upload detail images (if any)
    if (form.detailImageFiles && form.detailImageFiles.length > 0) {
      try {
        detailImages = await Promise.all(form.detailImageFiles.map(async (file: File) => {
          const fileData = await new Promise<string | ArrayBuffer | null>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
          });
  
          if (typeof fileData === 'string') {
            const response = await fetch('/api/upload', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${session?.accessToken}`,
              },
              body: JSON.stringify({ file: fileData }),
            });
  
            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.error || 'Error uploading detail images');
            }
  
            const data = await response.json();
            return data.url;
          }
          return '';
        }));
      } catch (error) {
        console.error("Error uploading detail images: ", error);
        alert("Error uploading detail images. Please try again.");
        return;
      }
    }
  
    // Handle the rest of your form submission logic...
    const productData = getProductData({ ...form, imageUrl, detailImages });
    try {
      if (editId) {
        const productRef = doc(db, 'products', editId);
        await updateDoc(productRef, productData);
        setEditId(null);
      } else {
        await addDoc(collection(db, 'products'), productData);
      }
      alert("Product uploaded successfully!");
      setForm({
        title: '',
        location: '',
        price: 0,
        originalPrice: 0,
        description: '',
        startDate: '',
        imageUrl: '',
        isPromo: false,
        category: '',
        purchaseCount: 0,
        imageFile: null,
        detailImages: [],
        detailImageFiles: [],
        pesawat: '',
        penginapan: '',
        mobilTravel: '',
        infoTambahan: '',
      });
    } catch (error) {
      console.error("Error uploading product: ", error);
      alert("Error uploading product. Please try again.");
    }
  
    const productsCollection = collection(db, 'products');
    const productsSnapshot = await getDocs(productsCollection);
    setProducts(productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product)));
  };
  

  const handleEdit = (product: Product) => {
    setForm(product);
    setEditId(product.id || null);
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, 'products', id));
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Title"
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Location"
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="originalPrice" className="block text-sm font-medium text-gray-700">Original Price</label>
            <input
              type="number"
              name="originalPrice"
              value={form.originalPrice}
              onChange={handleChange}
              placeholder="Original Price"
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          {!form.imageFile && (
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="text"
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                placeholder="Image URL"
                className="p-2 border border-gray-300 rounded w-full"
              />
            </div>
          )}
          <div>
            <label htmlFor="imageFile" className="block text-sm font-medium text-gray-700">Upload Image</label>
            <input
              type="file"
              name="imageFile"
              accept="image/*"
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="detailImageFiles" className="block text-sm font-medium text-gray-700">Upload Detail Images (max 4)</label>
            <input
              type="file"
              name="detailImageFiles"
              accept="image/*"
              multiple
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Category"
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="pesawat" className="block text-sm font-medium text-gray-700">Pesawat</label>
            <input
              type="text"
              name="pesawat"
              value={form.pesawat}
              onChange={handleChange}
              placeholder="Pesawat"
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="penginapan" className="block text-sm font-medium text-gray-700">Penginapan</label>
            <input
              type="text"
              name="penginapan"
              value={form.penginapan}
              onChange={handleChange}
              placeholder="Penginapan"
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="mobilTravel" className="block text-sm font-medium text-gray-700">Mobil Travel</label>
            <input
              type="text"
              name="mobilTravel"
              value={form.mobilTravel}
              onChange={handleChange}
              placeholder="Mobil Travel"
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="infoTambahan" className="block text-sm font-medium text-gray-700">Info Tambahan</label>
            <textarea
              name="infoTambahan"
              value={form.infoTambahan}
              onChange={handleChange}
              placeholder="Info Tambahan"
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="isPromo"
              checked={form.isPromo}
              onChange={(e) => setForm({ ...form, isPromo: e.target.checked })}
              className="mr-2"
            />
            <label htmlFor="isPromo" className="block text-sm font-medium text-gray-700">Promo</label>
          </div>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          {editId ? 'Update Product' : 'Add Product'}
        </button>
      </form>
      <div>
        <h2 className="text-xl font-bold mb-4">Product List</h2>
        <div className="grid grid-cols-1 gap-4">
          {products.map(product => (
            <div key={product.id} className="p-4 bg-white rounded shadow">
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p>{product.location}</p>
              <p>{product.price}</p>
              <p>{product.category}</p>
              <p>{product.pesawat}</p>
              <p>{product.penginapan}</p>
              <p>{product.mobilTravel}</p>
              <p>{product.infoTambahan}</p>
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={() => handleEdit(product)}
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id!)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
              <div className="mt-4">
                <img src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover rounded" />
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {product.detailImages.map((image, index) => (
                    <img key={index} src={image} alt={`Detail ${index + 1}`} className="w-full h-24 object-cover rounded" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
