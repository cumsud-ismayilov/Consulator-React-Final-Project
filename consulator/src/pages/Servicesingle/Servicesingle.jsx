import React from 'react'
import { Link } from "react-router-dom";
import "../Servicesingle/Servicesingle.scss"
import { BsChevronRight } from "react-icons/bs";
const Servicesingle = () => {
  return (
    <main>
        <section id="servicesingle">
        <div className="back-img">
          <div className="breadcumb-text">
            <p>Services</p>
            <ul className="pricing-ul">
              <li className="pricing-li1">
                <Link to="/">Home /</Link>
              </li>
              <li className="pricing-li2">Services</li>
            </ul>
          </div>
        </div>
      </section>
      <section id='single-sec1'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-8'>
              <div className='content-img'>
                <img src="http://consultar-react.wpocean.com/static/media/1.9b34b36d.jpg" alt="img" />
              </div>
            </div>
            <div className='col-xl-4'>
              <div className='single-widget'>
                <h2>All Services</h2>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAKCAYAAADLhGwXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NjFlNThlYi05MTMxLTVmNDItOTgzOC00MGJjMmNmYWEzY2IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTdDRTE0RTRBQzM0MTFFQjkyRjY5MUQ4MTVBMkJDQTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTdDRTE0RTNBQzM0MTFFQjkyRjY5MUQ4MTVBMkJDQTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NmNjMWYyNjAtNzllNi1lYjQ5LThlMzAtMTE4ZGM0YzYwZWFiIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDEwNTI5ZmEtOWFiMC04NDRhLWIyMGYtYTc1NjhlMjdiNWQ5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hXtlfwAAAh5JREFUeNqUlU1IFlEUhuezMAlSCFq50E1GYISVP4hYmmBtDCrSjUREEJRC7lqJoriQNkm4UAiL0Kxo0aIgoloEmrWpKNQWGRQl+EeRiaU9J94Ll48rM9+Bh/t/zjtnztxJlTcuRwHLgUtwGnbCKryCK3A/ysyy4Bych2LNvYN+GBwbyVnLxFlF0+/jNG2pgPAd8Aj2bXD2GrTAeoI4W+EeHNlg/SGcQPxyAsEpmj644LLh2xZ44In+pYd44e2xg10JEzTkiba39kSsau4oXE/oq8uJDglvh3L130ORnFfBYXCZuQwHYwKdhZPqf1My6sR++K61RrJ5JibbNYoZSUOtXyoVyqw9zLwCzaT5OAW31f8Ee+BnIFYBvIVt8AcqYSJtT5nibYYfVv+UzOeAaPPxBgqdBvbdcRnP02t149aAaLNRuKW+Oboa2GNCbki0WWdAtNlL6Fbf9g4hclNgX58n+qaJdqWSqw+oSIt3PXEhuwhf1bdX3AEpjbPtpoBqje0m6omp29fqH7KziM9WprOgQzeb2Rcl9L9ZqczRbtd4RvU3F1O/VnOPwWVoCj7AAcjX3BKUwnSMr13Kfq4n0B54t5fMv/ZtkO1n/sfpi65LINrsKTTDisYW4JgnegHqE4iOEDNJ0wCLmsqXLyfaYjT7op1wE9wLJfAxg3/BsDI66gWdhQHYC+NJHSHquc4Mykckn3YRlLI+nH7mnwADAOjLjxpuXO2rAAAAAElFTkSuQmCC" alt="imgs" />
                <ul className='single-ul'>
                  <li className='single-li'><BsChevronRight color="#3757f7"/>Strategy and Planning</li>
                  <li className='single-li'><BsChevronRight color="#3757f7"/>Corporate Finance</li>
                  <li className='single-li'><BsChevronRight color="#3757f7"/>Market Research</li>
                  <li className='single-li'><BsChevronRight color="#3757f7"/>Business Analysis</li>
                  <li className='single-li'><BsChevronRight color="#3757f7"/>Consumer Markets</li>
                  <li className='single-li'><BsChevronRight color="#3757f7"/>Insurance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Servicesingle
