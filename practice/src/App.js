import './App.css';
import MenuList from './MenuList';
import TripCard from './TripCard';
import ListBooks from './ListBooks';
import OrderButton from './OrderButton';
import SeatAvailability from './SeatAvailability';
import FeedbackForm from './FeedbackForm';

function App() {
  const dishList=[
    {name:'Pasta Aglio E Olio', price:300},
    {name:'Mac & Cheese', price:250},
    {name:'Brownie', price:100},
    {name:'Sushi', price:400}
  ];

  const tripDetails=[
    { destination: 'London', date: '24-10-2025', cost: 85000 },
    { destination: 'Berlin', date: '20-10-2025', cost: 65000 },
    { destination: 'Chernobyl', date: '17-10-2025', cost: 70000 }
  ]

  const bookDetails=[
    {author:"George R.R. Martin", title:"Game of Thrones", yearPublished:"2000"},
    {author:"Harper Lee", title:"To Kill a Mockingbird", yearPublished:"1995"},
    {author:"George R.R. Martin", title:"A Knight of the Seven Kingdoms", yearPublished:"2010"}
  ]

  return (
    <div>
      <MenuList dishes={dishList}/> <hr/>
      <TripCard details={tripDetails}/> <hr/>
      <ListBooks details={bookDetails}/> <hr/>
      <OrderButton/> <hr/>
      <SeatAvailability/> <hr/>
      <FeedbackForm/>
    </div>
  );
}

export default App;
