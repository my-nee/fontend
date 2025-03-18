
import Link from 'next/link';
export default function Home() {
  return (
    <nav >
      <ul className="space-y-5">
        <li>
          <Link href={"/checkout"}>
         Checkout
          </Link>
        </li>
        <li style={{ margin: "20px 0" }}>
          <Link href={"/login"}> Login</Link>
        </li>
        <li>
          <Link href={"/dashboard"}> Dashboard</Link>
        </li>
          <div> Để em xem thiết kế như nào đã</div>
      </ul>
    </nav>
  );
}
