import React from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import { selectCollectionsForPreview } from '../../Redux/Shop/shop.selector'

import CollectionPreview from '../../components/Collection-Preview/Collection-preview.component'
import './Collection-overview.styles.scss'

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
       {collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}

  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps) (CollectionOverview);