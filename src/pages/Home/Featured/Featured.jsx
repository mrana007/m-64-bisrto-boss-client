import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';


const Featured = () => {
    return (
        <section className="featured-item bg-fixed text-white pt-8 my-20">
            <div className=" bg-black bg-opacity-40 pt-12 pb-20 px-36">
            <SectionTitle
            subHeading="check it out"
            heading="From our menu"
            ></SectionTitle>
            <div className="md:flex justify-center items-center">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In facere, quam dolores aut molestias vel? Quos minus nam eius vero facilis, repellat est, dolorem architecto enim laudantium laborum reprehenderit dignissimos mollitia distinctio quia? Architecto amet repellendus consequuntur corporis provident odio ut reiciendis pariatur voluptatem repudiandae.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white uppercase mt-4">Read More</button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Featured;