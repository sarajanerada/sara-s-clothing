import React from 'react'

import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../../components/Collection-Preview/Collection-preview.component'

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colections: SHOP_DATA
    };
  }

  render() { 
  
    return (
      <div className='shop-page'>
        { this.state.colections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ) ) }
      </div>
    )
  }
}

export default ShopPage;