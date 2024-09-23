const Contact=()=>{
    function handleFormSubmit(formData){
        const formInputdata=Object.fromEntries(formData.entries());
        console.log(formInputdata);
    }
    return(
        <section className="contact">
          <h2 className="container-title">Contact Us</h2>
          <form action={handleFormSubmit} className="contact1">
             <input type="text" required={true} placeholder="Enter your name" name="username" className="form-control"></input>
             <input type="email" required={true} placeholder="Enter E-mail:" className="form-control" name="email"></input>
             <textarea rows="4" cols="50" placeholder="Enter Your Message:" className="form-control"></textarea>
             <button type="submit" className="submit-button">Submit</button>
          </form>

        </section>
    )
}
export default Contact;