import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordion() {
  return (
    <section id="accordion-item">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Market research on our global panel with support from our
                  experts.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  exercitationem pariatur iure nemo esse repellendus est quo
                  recusandae. Delectus, maxime.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  Planning can help alleviate workplace stress and increase
                  productivity.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  exercitationem pariatur iure nemo esse repellendus est quo
                  recusandae. Delectus, maxime.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>
                  Those who experiment the most, are able to innovate the best.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  exercitationem pariatur iure nemo esse repellendus est quo
                  recusandae. Delectus, maxime.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Typography>
                  Understand Your Problem, You must understand the issue.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  exercitationem pariatur iure nemo esse repellendus est quo
                  recusandae. Delectus, maxime.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
