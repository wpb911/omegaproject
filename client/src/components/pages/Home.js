import React, { Component, useEffect, useState } from 'react';
import Card from '../Card';
import produce from '../produce.json';
import { useStoreContext } from '../../store';
import ItemOption from '../ItemOption';
import calendar from '../../assets/calendar.png';
import RapidApi from "../../utils/RapidApi";
import {useAuthenticatedUser, useIsAuthenticated} from '../../utils/auth';



const styles = {
    search: {
        marginBottom: 25
    },
    icon: {
        maxWidth: 15,
        maxHeight: "auto"
    },
    hr: {
        paddingBottom: 10
    }
}


function Home() {
  const user = useAuthenticatedUser();
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

  useEffect(() => {
    console.log("Our user:", user)
  }, [user])

  return (
    <div className="container mx-auto">

      <form className="text-center mx-auto">
        <div className="form-row mx-auto">
                  <div className="col-md-6 col-lg-6 col-xl-6 form-group mx-auto">

                      

                   
                      <select className='form-control selectpicker'  id='all-produce' onChange={handleMonthChange}>
                          
                          <option value={defaultMonth} id="0" >    
                          
                          Current Month {`(${defaultMonth})`}</option>

              {/* <option value="allSeason" id="13" href="#">All Season</option> */}
              <option value="January" id="1">January</option>
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

          <div className="col-md-6 col-lg-6 col-xl-6 form-group mx-auto">

            <select className='form-control' id='all-produce' onChange={handleInputChange} style={styles.search}>
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
          {/* <div className="col-fluid form-group">
            <span><button className="btn form-group float-right pull-right justify-content-end btn-secondary btn-small">Search</button></span>
          </div> */}
        </div>
      </form>


      <div className="row row-cols-1 row-cols-md-3">



        {(fruitSearch.length) ?(fruitResult.map(item => (
            <Card
                id={item.id}
                title={item.name}
                select={item.select}
                image={item.image}
                calories={item.calories}
                fat={item.fat}
                sugar={item.sugar}
                cholesterol={item.cholesterol}
                protein={item.protein}
                serving={item.serving}
                isFavorited={user && user.favorites.includes(item.name)}
                season={item.season}/>)))
          
          :
          (fruitList.map(item => (
            <Card
                  id={item.id}
                  title={item.name}
                  select={item.select}
                  image={item.image}
                  calories={item.calories}
                  fat={item.fat}
                  sugar={item.sugar}
                  cholesterol={item.cholesterol}
                  protein={item.protein}
                  serving={item.serving}
                  isFavorited={user && user.favorites.includes(item.name)}
                  season={item.season}/>
          ))
          )


        }




          </div>

    </div>
  )
}
export default Home;