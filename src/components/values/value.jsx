import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,
} from "react-icons/md";
import data from "../../utils/accordion.jsx";
import "./value.css";

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="/value.png" alt="" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>

          <span className="primaryText">Value We Give to You</span>

          <span className="secondaryText">
            We always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => (
              <AccordionItem key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionButton ">
                    <AccordionItemState>
                      {({ expanded }) => (
                        <AccordionButtonContent
                          expanded={expanded}
                          item={item}
                        />
                      )}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <hr className="divider" />
    </section>
  );
};

const AccordionButtonContent = ({ expanded, item }) => {
  const className = expanded ? "expanded" : "collapsed";
  return (
    <>
      <div className={`flexCenter icon ${className}`}>{item.icon}</div>
      <span className="primaryText">{item.heading}</span>
      <div className="flexCenter icon">
        <MdOutlineArrowDropDown size={20} />
      </div>
    </>
  );
};

export default Value;
