import Link from 'next/link'; // Import Link from Next.js for client-side navigation

const Home = () => {
  return (
    <div>
      <h1>Homepage</h1>
      
      <Link href="/login">
        <button>
          Login
        </button>
      </Link> 
      
    </div>
  );
};

export default Home;