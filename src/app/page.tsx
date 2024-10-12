import Link from "next/link";



export default function Home() {
  return (
  <div>
    <section>
    <div className="parentContainer">
  <h1 data-text="Trending Blog!">Trending Blog!</h1>
  <div className="childContainer">
    <div className="imageContainer1"></div>
    <div className="title">The Future of AI</div>
    <div className="description">AI is transforming industries but also raising concerns like job losses and data privacy. 
    Balancing innovation with regulation is crucial.</div>

    <Link href={"/read-more"}>
    <button className="button">Read More</button>
  </Link>

  </div>
</div>
    </section>
    <section className="blogs-section">
  <h1 className="section-heading">Blogs</h1>
  <div className="cards-container">
    <div className="card">
      <div className="imageContainer2"></div>
      <div className="title">The Future of Tech</div>
      <div className="description">AI is transforming industries but also raising concerns like job losses and data privacy. Balancing innovation with regulation is crucial.</div>
      <Link href={"/read-more"}>
    <button className="button">Read More</button>
  </Link>


    </div>
    
    <div className="card">
      <div className="imageContainer3"></div>
      <div className="title">Blockchain Revolution</div>
      <div className="description">Blockchain is changing how we handle transactions, but its energy usage and scalability challenges raise concerns for the future.</div>
      <Link href={"/read-more"}>
    <button className="button">Read More</button>
  </Link>

    </div>

    <div className="card">
      <div className="imageContainer4"></div>
      <div className="title">Green Tech Innovations</div>
      <div className="description">From electric cars to renewable energy, green tech is at the forefront of the fight against climate change, driving sustainability forward.</div>
      <Link href={"/read-more"}>
    <button className="button">Read More</button>
  </Link>

    </div>

    <div className="card">
      <div className="imageContainer5"></div>
      <div className="title">Quantum Computing</div>
      <div className="description">Quantum computers promise to solve problems beyond the reach of classNameical machines, but the field is still in its infancy.</div>
      <Link href={"/read-more"}>
    <button className="button">Read More</button>
  </Link>

    </div>
  
    <div className="card">
      <div className="imageContainer6"></div>
      <div className="title">Cybersecurity Trends</div>
      <div className="description">As cyberattacks become more sophisticated, organizations must adopt advanced cybersecurity strategies to protect data and privacy.</div>
      <Link href={"/read-more"}>
    <button className="button">Read More</button>
  </Link>

    </div>

    <div className="card">
      <div className="imageContainer7"></div>
      <div className="title">The Future of AI</div>
      <div className="description">AI is revolutionizing industries from healthcare to finance, but we must navigate the ethical and regulatory challenges it poses.</div>
      <Link href={"/read-more"}>
    <button className="button">Read More</button>
  </Link>

    </div>
  </div>
</section>

  </div>
     );
}
