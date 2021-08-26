import Cake from "./Cake"



function CakeList() {
    var cakes = [{
        title: 'Mixed Flavoured cake',
        price: 600,
        image: 'cake_1.jpeg'
    },
    {
        title: 'Chocolate  cake',
        price: 550,
        image: 'cake_2.jpeg'
    },
    {
        title: 'vanilla cake',
        price: 500,
        image: 'cake_3.jpeg'
    },
    {
        title: 'Pineapple cake',
        price: 600,
        image: 'cake_4.jpeg'
        },
        {
            title: 'Mixed Flavoured cake',
            price: 600,
            image: 'cake_9.jpeg'
        },
        {
            title: 'Chocolate  cake',
            price: 550,
            image: 'cake_5.jpeg'
        },
        {
            title: 'vanilla cake',
            price: 500,
            image: 'cake_7.jpeg'
        },
        {
            title: 'Pineapple cake',
            price: 600,
            image: 'cake_8.jpeg'
        },
        {
            title: 'Mixed Flavoured cake',
            price: 600,
            image: 'cake_1.jpeg'
        },
        {
            title: 'Chocolate  cake',
            price: 550,
            image: 'cake_2.jpeg'
        },
        {
            title: 'vanilla cake',
            price: 500,
            image: 'cake_3.jpeg'
        },
        {
            title: 'Pineapple cake',
            price: 600,
            image: 'cake_4.jpeg'
            },
            {
                title: 'Mixed Flavoured cake',
                price: 600,
                image: 'cake_9.jpeg'
            },
            {
                title: 'Chocolate  cake',
                price: 550,
                image: 'cake_5.jpeg'
            },
            {
                title: 'vanilla cake',
                price: 500,
                image: 'cake_7.jpeg'
            },
            {
                title: 'Pineapple cake',
                price: 600,
                image: 'cake_8.jpeg'
            }
    
    ]
    return (

        

        <div className="row" style={{ paddingLeft: "50px" }} >
            
            {
                cakes.map((each,index)=>{
                    return <Cake kay={index} cake={each} />
                })
            }
        </div>
    )   
}
export default CakeList



