// "use client";
import Image from "next/image";
import styles from "./contact.module.css";
// import { useEffect, useState } from "react";
const ContactPage = () => {
	// * For Resolving Hydration error we can also use the method of importing dynamically
	// * e.g: const HydrationNoSSR = dynamic(()=>"@components/Hydration",{ssr:false})
	// * we can also do it using suppressHydrationWarning in html Tag........
	// * Understanding the Hydration Error in CSR and SSR.....
	// const [Random, setRandom] = useState(false);
	// useEffect(() => {
	// 	setRandom(true);
	// }, []);
	// const a = Math.random();
	// console.log(a);
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image src="/contact.png" alt="" fill className={styles.img} />
			</div>
			<div className={styles.formContainer}>
				<form action="" className={styles.form}>
					{/*FIXME: From Above 
					{Random && a} */}
					<input type="text" placeholder="Name and Surname" />
					<input type="text" placeholder="Email" />
					<input type="text" placeholder="Phone Number (Optional)" />
					<textarea name="" id="" cols="30" rows="10" placeholder="Message" />
					<button type="button">Send</button>
				</form>
			</div>
		</div>
	);
};

export default ContactPage;
