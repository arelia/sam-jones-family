import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>July 23 – July 26, 2020</p>
    <p>Los Angeles, California</p>
    <p>Get ready for family fun in the sun L.A. style. We are planning a great time for all. Our tentative itinerary for this great 4-day event is as follows.</p>
    <ul>
      <li><strong>Thursday</strong>: 	Meet and Greet reception at hotel. This will include registration check-in, a light meal and fun and games for all.  Followed by free time for local extravaganzas at nearby attractions.</li>
      <li><strong>Friday</strong>:	Casino Bus Trip for adults.  Amusement Park Getaway or Bowling for youth.</li>
      <li><strong>Saturday</strong>:	Picnic at local park from 10:00 – 2:00</li>
      <li><strong>Sunday</strong>:	Sunday Morning Worship at New Commandment Baptist Church, followed by Banquet Dinner at Hotel.  </li>
    </ul>
    <hr></hr>

    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSchPXBvLJtD2s_nmR13GkNwBv90CQ167G0B7UexxbU3kR6euA/viewform?embedded=true" width="640" height="6349" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

  </Layout>
)

export default IndexPage
