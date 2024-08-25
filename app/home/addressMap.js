

const AddressMap = () => {
    return(
    <div className="container py-4">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5764.177444022194!2d-79.251928623366!3d43.75025434614754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1d20b2b7cd1%3A0x3a5de980fed3b39d!2s59%20Kilgreggan%20Crescent%2C%20Scarborough%2C%20ON%20M1J%201S4!5e0!3m2!1sen!2sca!4v1724533372122!5m2!1sen!2sca" 
          className="w-100 border-0" 
          height={300}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    )
}

export default AddressMap;