import React from 'react';

const Contact = () => {
    return (
        <div>
            <section id="contact" class="content-section text-center">
                <div class="contact-section">
                    <div class="container">
                        <h2>Contact Us</h2>
                        <p>Feel free to shout us by feeling the contact form or visiting our social network sites like Fackebook,Whatsapp,Twitter.</p>
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2">
                                <form class="form-horizontal">
                                    <div class="form-group">
                                        <label for="exampleInputName2">Name</label>
                                        <input type="text" class="form-control" id="exampleInputName2" placeholder="Your Name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail2">Email</label>
                                        <input type="email" class="form-control" id="exampleInputEmail2" placeholder="youremail@gmail.com" />
                                    </div>
                                    <div class="form-group ">
                                        <label for="exampleInputText">Your Message</label>
                                        <textarea class="form-control" placeholder="Your Comment"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-default">Send Message</button>
                                </form>
                                <hr />

                                <h3>Our Social Sites</h3>
                                <ul class="list-inline banner-social-buttons">
                                    <li><a href="/" class="btn btn-default btn-lg"><i class="fa fa-twitter"> <span class="network-name">Twitter</span></i></a></li>
                                    <li><a href="/" class="btn btn-default btn-lg"><i class="fa fa-facebook"> <span class="network-name">Facebook</span></i></a></li>
                                    <li><a href="/" class="btn btn-default btn-lg"><i class="fa fa-youtube-play"> <span class="network-name">Youtube</span></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;