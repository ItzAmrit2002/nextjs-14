import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h2 className={styles.subtitle}>About Agency</h2>
				<h1 className={styles.title}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, minus
					officiis!
				</h1>
				<p className={styles.desc}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nemo
					nihil magnam harum praesentium dolor vero incidunt possimus. Ullam
					porro voluptatum pariatur tenetur molestiae quod repudiandae facilis
					similique repellendus. Vitae!
				</p>
				<div className={styles.boxes}>
					<div className={styles.box}>
						<h1>10k +</h1>
						<p>Years of Experience</p>
					</div>
                    <div className={styles.box}>
						<h1>10k +</h1>
						<p>Years of Experience</p>
					</div>
                    <div className={styles.box}>
						<h1>10k +</h1>
						<p>Years of Experience</p>
					</div>
				</div>
			</div>
			<div className={styles.imgContainer}>
				<Image src="/about.png" alt="" fill className={styles.img}/>
			</div>
		</div>
	);
};

export default About;
