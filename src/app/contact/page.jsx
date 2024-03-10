import Image from "next/image"
import styles from "./contact.module.css"
const Contact = () => {
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" fill className={styles.img}/>
        </div>
        <div className={styles.formContainer}>
          <form action="" className={styles.form}>
            <input type="text" name="name" id="name" placeholder="Name and Surname"/>
            <input type="email" name="email" id="email" placeholder="Type Your E-mail"/>
            <input type="number" name="phone" id="phone" placeholder="Your Phone Number (Optional)"/>
            <textarea name="msg" id="msg" cols="30" rows="10" placeholder="msg"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        </div>
    )
  }
  
  export default Contact