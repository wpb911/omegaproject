import React, { Component, useEffect, useState } from 'react';
import Card from '../Card';
import produce from '../produce.json';
import ItemOption from '../ItemOption';
import RapidApi from "../../utils/RapidApi";



function Home() {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const d = new Date();
  const defaultMonth = monthNames[d.getMonth()];
  console.log(defaultMonth);

  const [fruitSearch, setfruitSearch] = useState("");
  const [fruitResult, setFruitResult] = useState({});
  const [month, setMonth] = useState(defaultMonth);
  const [fruitList, setFruitList] = useState(produce);



  const handleMonthChange = (event) => {
    const { value } = event.target;
    setMonth(value);
    console.log(value);
    setfruitSearch("")
    // const onSeason = produce.filter(fruit => {return fruit.season.includes(month)});
    // // const onSeason = produce.filter(fruit => fruit.season.includes(month));
    // setFruitList(onSeason);
    // console.log(onSeason);
    // // console.log(fruitList);
    // setfruitSearch("");
  }

  const handleInputChange = (event) => {
    const { value } = event.target;
    setfruitSearch(value);
    console.log(fruitSearch);

    // RapidApi.getIngredient(value, setFruitResult);
    // if (fruitResult == {}) {
    //   RapidApi.getIngredient(value, setFruitResult);
    // }
  }

  useEffect(() => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const d = new Date();
    const defaultMonth = monthNames[d.getMonth()];
    console.log(defaultMonth);
    const onSeason = produce.filter(fruit => { return fruit.season.includes(month) });
    if (month=="allSeason"){
      setFruitList(produce)
    } else {
      setFruitList(onSeason);
    }
    console.log(onSeason);


    const selectedFruit = produce.filter(fruit => { return fruit.name==fruitSearch });

    if(fruitSearch=="allProduce"){
      setFruitResult(produce)
    } else {
      setFruitResult(selectedFruit)
    }

  }, [month,fruitSearch])

  return (
    <div className="container mx-auto">

      <form className="text-center mx-auto">
        <div className="form-row mx-auto">
          <div className="col-md-5 col-lg-5 col-xl-5 form-group mx-auto">

            <select className='form-control' id='all-produce' onChange={handleMonthChange}>
              <option value={defaultMonth} id="0" href="#">Current Month {`(${defaultMonth})`}</option>

              <option value="allSeason" id="13" href="#">All Season</option>
              <option value="January" id="1" href="#">January</option>
              <option value="February" id="2">February</option>
              <option value="March" id="3">March</option>
              <option value="April" id="4">April</option>
              <option value="May" id="5">May</option>
              <option value="June" id="6">June</option>
              <option value="July" id="7">July</option>
              <option value="August" id="8">August</option>
              <option value="September" id="9">September</option>
              <option value="October" id="10">October</option>
              <option value="November" id="11">November</option>
              <option value="December" id="12">December</option>
            </select>

          </div>

          <div className="col-md-5 col-lg-5 col-xl-5 form-group mx-auto">

            <select className='form-control' id='all-produce' onChange={handleInputChange}>
              <option value="allProduce"id="0">All Produce</option>

              {produce.map(item => (
                <ItemOption
                  id={item.id}
                  name={item.name}
                  value={item.name}
                  key={item.name}
                />))}


            </select>

          </div>
          <div className="col-fluid form-group">
            <span><button className="btn form-group float-right pull-right justify-content-end btn-secondary btn-small">Search</button></span>
          </div>
        </div>
      </form>


      <div className="row row-cols-1 row-cols-md-3">



        {(fruitSearch.length) ?(fruitResult.map(item => (
            <Card
                  id={item.id}
                  title={item.name}
                  select={item.select}
                  heart={item.heart}
                  image={item.image}/>)))
          // (<div className="col mb-4">
          //   <div className="card h-100 text-center">
          //     <span>
          //       <a href="#"
          //         className="badge badge-danger float-right">
          //         {fruitResult.food ? (<img src={fruitResult.food.image} />)
          //           :
          //           (<p>testing</p>)


          //         }
          //         {/* // style={styles.heart}  */}
          //       </a>
          //     </span>

          //     {/* <img
          //                 src={}
          //                 className="card-img-top"
          //                 alt={} /> */}
          //     <div className="card-body">
          //       <h5 className="card-title">{ }</h5>
          //       <p className="card-text">
          //         { }
          //       </p>

          //       <p className="card-text">
          //         <small className="text-muted">
          //           Nutritional Value: <br />
          //           { }
          //         </small></p>
          //       <div className="card-body">
          //         <a href="#" className="card-link">
          //           View Recipes
          //                                               </a>
          //       </div>
          //     </div>
          //   </div>
          // </div>)

          :

          (fruitList.map(item => (
            <Card
                  id={item.id}
                  title={item.name}
                  select={item.select}
                  heart={item.heart}
                  image={item.image}/>
          ))
          )


        }




      </div>
    </div>
  )
}
export default Home;