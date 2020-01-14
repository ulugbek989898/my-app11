import React from 'react';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppinIcon} from  '../../assets/shopping-bag.svg';
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

const CartIcon = ({toggleCartHidden,itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppinIcon className='shopping-icon' />
        <span className="item-count">{itemCount }</span>
    </div>
);

 const mapDispatchToProps = dispatch => ({
     toggleCartHidden: () => dispatch(toggleCartHidden())
 });
 const mapStateToProps = state => ({
     itemCount: selectCartItemsCount(state)
 })

export default connect(mapStateToProps,mapDispatchToProps) (CartIcon);