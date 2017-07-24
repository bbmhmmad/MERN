import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from './reducers/index.js'


import {addToCart} from './actions/cartActions.js'
import{postBooks,deleteBooks,updateBooks} from './actions/booksActions.js'


//Step 3: define reducers

//Step 1: Create store
const middleware=applyMiddleware(thunk,logger)
const store = createStore(reducers,middleware)

//get current state
// store.subscribe(function(){
// 	console.log('current state is: ' ,store.getState() )
	
// })



// Step 2: Create and dispatch actions
// store.dispatch(postBooks(
// ))

// //CRUD OPERATIONS

// // //DELETE BOOK
// // store.dispatch(deleteBooks({id:1}))

// //UPDATE BOOK
// store.dispatch(updateBooks({id:2,title:'Learn React in 24 hr'}))

// //ADD TO CART
// store.dispatch(addToCart([{id:1}]))

//REACT RENDER COMPONENTS
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import {Router,Route,IndexRoute,browserHistory,hashHistory} from 'react-router'

import BooksList from './components/pages/booksList.js'
import BooksForm from './components/pages/bookForm.js'
import Cart from './components/pages/cart.js'
import Main from './main.js'
// import Menu from './components/pages/menu.js'
// import Footer from './components/pages/footer.js'
render(

	<Provider store={store}>
		<Router history = {browserHistory}>
			<Route path='/' component= {Main}> 
				<IndexRoute component={BooksList} />
				<Route path='/admin' component = {BooksForm} />
				<Route path='/cart' component = {Cart} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
	)