import { useQuery } from '@apollo/client';

const Home = () => {
  return (
    <main>
        <body>
          <section class="hero">
              <div class="container">
                  <h2>Welcome to Custom Pizza</h2>
                  <p>Experience the taste of perfection with our customized pizzas made just for you.</p>
                  <a href="#menu" class="btn">Explore Menu</a>
              </div>
          </section>

          <section id="about" class="about">
              <div class="container">
                  <h2>About Us</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo mattis est, ac aliquam lacus aliquet vel. Sed maximus magna eu ipsum viverra, et faucibus leo consequat.</p>
                  <p>Nunc nec arcu commodo, fermentum mauris ut, laoreet ex. Duis sit amet augue tincidunt, vehicula nisl ac, tempor odio.</p>
              </div>
          </section>

          <section id="menu" class="menu">
              <div class="container">
                  <h2>Our Menu</h2>
                  <p>Explore our delicious selection of pizzas and customize them to your liking.</p>
                  <a href="customize.html" class="btn">Customize Your Pizza</a>
              </div>
          </section>

          <section id="contact" class="contact">
              <div class="container">
                  <h2>Contact Us</h2>
                  <p>Have questions or feedback? Reach out to us and we'll get back to you as soon as possible.</p>
                  <a href="contact.html" class="btn">Get in Touch</a>
              </div>
          </section>
        </body>
    </main>
  );
};

export default Home;


