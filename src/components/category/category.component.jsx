import React from 'react'

import { Route } from 'react-router-dom'

import { selectShopDataForItem } from '../../redux/shop/shop.selector'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionItem from "../collection-item/collection-item.components";
import './category.styles.scss'

const CategoryPage = ({ match, collection }) => (

    <div className="collection-page">
        <h2 className="title">{collection.title}</h2>
        <div className="items">
            {
                collection.items.map(item => (
                    <CollectionItem key={item.id} item={item} />

                ))
            }
        </div>
    </div>
)


const mapStateToProps = (state, ownProps) => ({
    collection: selectShopDataForItem(ownProps.match.params.categoryId)(state)
})


export default connect(mapStateToProps)(CategoryPage);