import axios from "axios";
import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  console.log("meals", meals);
  useEffect(() => {
    async function fetchData() {
		try {
		  const response = await axios.get('http://localhost:3000/meals');
		  const data = response.data;
		  console.log('response',response.data);
		  setMeals(data)
		} catch (error) {
		  console.error(error);
		}
	  }
    fetchData();
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
