# NYT Reader Take Home Assessment 

This project was a challenge to complete a take-home style assesment in ~8 hours of work.

## Components

- App 
- Listings
- Brief Listing
- Detailed Listing
- Nav

### Challenges faced

- I forgot to set the `, [] )` at the end of my useEffect hook, which was causing an infinite loop on my API call.  This caused the NYT API to lock me out. several times, before I realized where my error was.  Shoutout to my friends in study hall.
- 

### Functions and State Management 

React Hooks were used.  There was one main function written for the search feature.  It was a .filter() that matched to a query parameter with the .includes method.  .toLowerCase() was used so that the user did not need to match case on search.

### Known bugs

- A very small few URLs will break.  The root cause has not yet been diagnosed.
- I am getting an empty div in my listings from my .map() in Listings that I am unsure why they are coming.

### Possible extensions

- Some actual sleek styling of all elements 
- Somehow add more functionality or features that make this more of a value-add than just a middle-man.
