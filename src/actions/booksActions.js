"use strict"
import axios from 'axios'
// POST A BOOK
export function postBooks(book){
	return function(dispatch){
		axios.post('/api/books',book)
		.then(function(response){
			dispatch({type:'POST_BOOK',payload:response.data})
		})
		.catch(function(err){
			dispatch({type:'POST_BOOK_REJECTED',payload:'THERE WAS AN ERROR. PLEASE TRY AGAIN'})
		})
	}
	// return {
	// 	type:"POST_BOOK",
	// 	payload: book
	// }
}
// DELETE A BOOK
export function deleteBooks(_id){
	return function(dispatch){
		axios.delete('/api/books/' + _id)
		.then(function(response){
			dispatch({type:'DELETE_BOOK',payload:_id})
		})
		.catch(function(err){
			dispatch({type:'DELETE_BOOK_REJECTED',payload:'there was an error deleting the book'})
		})
	}
	// return {
	// 	type:"DELETE_BOOK",
	// 	payload: _id
	// }
}
//UPDATE BOOK
export function updateBooks(book){
	return {
		type:"UPDATE_BOOK",
		payload: book
	}
}

export function resetButton(){
	return {
		type:"RESET_BUTTON",
		
	}
}

//Retrieve all books as if using API

export function getBooks(){
	return function(dispatch){
		axios.get('/api/books')
		.then(function(response){
			dispatch({type:'GET_BOOKS',payload:response.data})
		})
		.catch(function(err){
			dispatch({type:'GET_BOOKS_REJECTED',payload:err})
		})
	}
}