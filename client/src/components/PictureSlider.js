import React, { Component } from 'react'
import { css } from 'react-emotion'
// First way to import
import { ClipLoader } from 'react-spinners'
import { connect } from 'react-redux'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row,
  Col,
  Card,
  CardImg
} from 'reactstrap'

const mapStateToProps = (state) => {
  return {
    pictures: state.pictures
  }
}


const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;


class PictureSlider extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === this.props.pictures.pictureList.length - 1 ? 0 : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === 0 ? this.props.pictures.pictureList.length - 1 : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    const { pictures } = this.props
    const { isFetchingPictures, pictureList, thumbnailList } = pictures

    const slides = pictureList.map((item, index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        >
          <img style={{ width: '100%', margin: 'auto' }} src={item.src} alt={item.altText} />
          <CarouselCaption captionHeader={item.caption} />
        </CarouselItem>
      )
    })

    const thumbnails = thumbnailList.map((item, index) => (
      <Col key={index} xs="12" xl="6">
        <Card onClick={() => this.goToIndex(index)} >
          <CardImg
            top
            width="100%"
            src={item.src}
            alt="Card image cap"
          />
        </Card>
      </Col>
    ))

    return (
      <div>
        <ClipLoader
          className={override}
          sizeUnit={"px"}
          size={100}
          color={'#123abc'}
          loading={isFetchingPictures}
        />
        <Row>
          <Col>
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators items={pictureList} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
          </Col>
          <Col >
            <Row>{thumbnails}</Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(mapStateToProps)(PictureSlider)