
import useData from '../../Hooks/useServiceData';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import app from '../../images/appandroid.jpg'
import flower1 from '../../images/flower1.PNG'
import flower2 from '../../images/flower2.PNG'
import flower3 from '../../images/flower3.PNG'
import './Home.css'



const Home = () => {
    const [data] = useData();


    return (
        <div>
            <Banner></Banner>
            <h1 className='text-warning'>Our Services</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 my-3">
                {data.map(ser => <Services
                    key={ser.id}
                    services={ser}
                ></Services>)}
            </div>
            <div className="my-3">
                <h2 className="app text-warning">Our Android App  is Coming Soon with Exclusive Features</h2>
                <img className="w-75" src={app} alt="" />
            </div>
            <div className="my-3 p-3">
                <h2 className="text-warning">Our Clients Reviews</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card flower h-100">
                            <img src={flower3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">SABINA HOSSAIN / SHAHAJADPUR, DHAKA</h5>
                                <p className="card-text">Sunshine Hospital is so good - everything in Sunshine Hospital is good, behavior and services all wonderful</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card flower h-100">
                            <img src={flower1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">MD. YOUSUF HOSSAIN / DHAKA</h5>
                                <p className="card-text">Some of the nursing staff a sister and brother are excellent - these nursing staff provided excellent service and care</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card flower h-100">
                            <img src={flower2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">HOSSAIN / UTTARA, DHAKA</h5>
                                <p className="card-text">We are coming to Sunshine Hospital since 2016, several surgeries were done here </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    );
};

export default Home;