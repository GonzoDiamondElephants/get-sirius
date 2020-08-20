import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

function Categories(props) {
  let categoriesHTML = [];

  for (let i = 0; i < props.categories.length; i++)
    categoriesHTML.push(
      <Button
        variant="contained"
        className="storeButton"
        key={i}
        onClick={(e) => {
          props.dispatch({
            type: "CHANGE_CATEGORY",
            payload: props.categories[i].name
          });
        }}
      >
        {props.categories[i].displayName || props.categories[i].name}
      </Button>
    );

  return <>{categoriesHTML}</>;
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps)(Categories);

//add to cart= when dispatched, finds the product, decrement the stock, needs to show when OUT OF STOCK, incriment cart by one
