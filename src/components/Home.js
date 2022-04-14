import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
          title = "Model S"
          description = "Order OnLine for Touchless Delivery"
          backgroundImg = "model-s.jpg"
          leftBtnText = "Custom Order"
          rightBtnText = "Existing Inventory"
        />
        <Section
          title = "Model Y"
          description = "Order OnLine for Touchless Delivery"
          backgroundImg = "model-y.jpg"
          leftBtnText = "Custom Order"
          rightBtnText = "Existing Inventory"
        />
        <Section
          title = "Model 3"
          description = "Order OnLine for Touchless Delivery"
          backgroundImg = "model-3.jpg"
          leftBtnText = "Custom Order"
          rightBtnText = "Existing Inventory"
        />
        <Section
          title = "Model X"
          description = "Order OnLine for Touchless Delivery"
          backgroundImg = "model-x.jpg"
          leftBtnText = "Custom Order"
          rightBtnText = "Existing Inventory"
        />
        <Section
          title = "Solar Panels"
          description = "Money-back Guarantee"
          backgroundImg = "solar-panel.jpg"
          leftBtnText = "Order now"
          rightBtnText = "Learn More"
        />
        <Section
          title = "Solar Roofs"
          description = "Go Green Baby"
          backgroundImg = "solar-roof.jpg"
          leftBtnText = "Order now"
          rightBtnText = "Learn More"
        />
        <Section
          title = "Accessories"
          description = "Go Green Baby"
          backgroundImg = "accessories.jpg"
          //To fix issues with right button we need to go into 
          //Section.JS and create if statement to show if right button exists
          leftBtnText = 'Shop now'
          
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`