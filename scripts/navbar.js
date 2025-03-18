const navbar =()=>{
    let card =`
    <nav>
        <h1>Dream Wedding Planner</h1>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="login.html">Login</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="signup.html">signup</a></li>
            <li><a href="#">Logout</a></li>
        </ul>
    </nav>`;

    document.getElementById("nav").innerHTML = card;
};

navbar();