import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
  return (
    <div
      className='flex items-center rounded-md border ml-2 lg:ml-4'
    >
      <InputBase
        className='ml-4'
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button"
        className="p-2 bg-blue-100 rounded-l-none rounded-r-md border hover:bg-blue-70" 
        aria-label="search">
        <SearchIcon className="text-white w-5 h-5"/>
      </IconButton>
    </div>
  );
}