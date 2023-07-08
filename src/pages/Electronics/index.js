import React from "react";
import './style.scss'
import { useNavigate } from "react-router-dom";
import Filters from "../../components/Filters/Filters";
import CarouselItem from "../../components/CarouselItem/CarouselItem";

const MenProducts = ()=>{
    const [switchButton, setSwitchButton] = React.useState(false)
    const [clear, setClear] = React.useState(false)
    const activateFilters =()=>{
        setSwitchButton(prev => !prev)
    }
    const [products, setProducts] = React.useState([])
    const [localFiltered, setLocalFiltered] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    const navigate = useNavigate()

    const toDetails = (id)=>{
        navigate(`/product/${id}`, {state:id})
    }

    React.useEffect(()=>{
        const loadData = async ()=>{
            setIsLoading(true)
            const url = "https://fakestoreapi.com/products"
            const response = await fetch(url)
            const result = await response.json()
            setProducts(result)
            setLocalFiltered(result)
            setIsLoading(false)
        }
        loadData()
    },[clear])
    let productMen = []
    localFiltered.map((product)=>{
        if(product.category==="electronics"){
            return productMen.push(product)
        }
        else return null
    })
    const check = ()=>{
        const inputChecked = window.event.target
        if(inputChecked.checked){
            const inputs = document.querySelectorAll('.filter__rating-wrapper input')
            inputs.forEach(input=> {
                if(input!==inputChecked) {
                    input.checked = false
                }
            })
            checkFilters(inputChecked.value)
        }
        else{
            setClear(prev=>!prev)
        }
    }
    const checkFilters = (value)=>{
        const newValue = parseInt(value)
        if(newValue>0){
            const limit = newValue+1
            const result = products.filter((data)=>{
                return (data.rating.rate > newValue && data.rating.rate < limit)
            })
            setLocalFiltered(result)
        }
        else{
            setClear(prev=>!prev)
        }
    }
    return(
        <div className="product-section-container">
            <h1>Electronics</h1>
            <section className="products-outer-wrapper">
                <div className="filters">
                    { switchButton && <Filters clickHandle={check} clear={setClear}/>}
                    <button onClick={activateFilters} className="filters__button font-button color-white">Filters</button>
                </div>
                <div className="products-inner-wrapper">
                    {
                        productMen.map((product)=>{
                            const fillProgress = Math.ceil((product.rating.rate * 100)/5)
                            const color = Math.ceil((product.rating.rate * 100)/5)
                            const fillColor = Math.ceil((color*255)/100)
                            const rating = {
                                backgroundImage: `linear-gradient(90deg, rgb(${255-fillColor}, ${fillColor}, ${fillColor}) ${fillProgress}%, transparent ${fillProgress}%, transparent ${100-fillProgress}%)`
                            }

                            return(
                                <div key={product.id} onClick={()=>toDetails(product.id)}>
                                    <CarouselItem title={product.title} price={product.price} featuredImg={product.image} category={product.category}/>
                                </div>
                            )
                        })
                    }

                    {isLoading && <div className="loader-container">
                        <div className="loader big">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>}
                </div>
            </section>
        </div>
    )
}

export default MenProducts