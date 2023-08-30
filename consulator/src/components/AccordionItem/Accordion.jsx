import * as React from "react";
import { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordion() {
  const [accordion, setAccordion] = useState([]);
  const BASE_URL = "http://localhost:3001/";
  useEffect(() => {
    fetch(`${BASE_URL}accordionitem`)
      .then((response) => response.json())
      .then((data) => {
        setAccordion(data);
      });
  }, []);
  return (
    <section id="accordion-item">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            {accordion.length > 0 &&
              accordion.map((element, index) => (
                <Accordion key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{element.tittle}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{element.desc}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
