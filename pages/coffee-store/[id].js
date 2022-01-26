import { useRouter } from "next/router";
import Link from "next/link";
const CoffeShop=()=>{
    const router=useRouter();
    console.log(router)
    return (<div>{router.query.id}
    <Link href='/' scroll={false}><a>Bak to Home</a></Link>
    </div>)
}

export default CoffeShop;