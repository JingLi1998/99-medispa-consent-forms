import { List } from "./List";
import { Meta } from "@storybook/react/types-6-0";
import { withFormLayout } from "../../storybook/decorators";

export default {
  component: List,
  title: "List",
  decorators: [withFormLayout],
} as Meta;

const listItems = ["Item 1", "Item 2", "Item 3"];

export const Default = () => <List label="List" listItems={listItems} />;

const scrollableListItems = [
  "I authorize the staff at 99 Medispa to perform one of the following treatments: Fotona, Picosure, Endymed, Ultherapy, Thermage",
  "I understand that there may be some degree of discomfort during treatment and after treatment, including common skin reactions such as inflammation (redness) and swelling with having this treatment / procedure.",
  "I understand that there are no guarantees as to the results of this treatment or future  treatments due to many variables such as: age, hormonal changes, condition/colour of skin/hair, sun exposure, medications etc.",
  "I understand that with some treatments I may experience, prolonged redness, sensitivity, scabbing and if prone to herpes may experience a stimulation of the virus.",
  "I understand that I cannot have another laser, IPL or RF treatment within 21 days of this treatment on the same area, whether the treatment is performed at this clinic location or any  other clinic location.",
  "I understand that to achieve maximum results, I will need several treatments",
  "I understand this treatment is a cosmetic treatment and that no medical claims are expressed or implied",
  "I agree to refrain from sun tanning booths or sun exposure while I am undergoing treatments.",
  "I understand that although complications are very rare, sometimes an unexpected outcome may occur and that prompt treatment is necessary. In the event of any unexpected outcome, I will immediately contact the doctor / technician who performed the treatment. Adverse reactions may include: burning, blistering, grazing or changes to skin colour (hyperpigmentation – an increase in colour, Hypopigmentation – loss of colour) and scarring.",
  "I understand that some medications may cause me to be photosensitive to light exposure and if treated with laser, may contribute to adverse reactions. It is my responsibility to check with my doctor if my medication may make me photosensitive prior to commencing laser treatments.",
  "I have disclosed to the treatment practitioner all information that has been requested and agree to have this treatment performed on me.",
  "I agree to have my photo taken before the treatment and I understand that I may be asked to return for a second photo after my skin has healed. I understand that my photo may be used for marketing purposes in the future.",
  "I acknowledge that I have read and received a Post Procedure Care Sheet and further agree to follow all post procedure care instructions as I am directed.",
];

export const Scrollable = () => (
  <List label="Scrollable List" listItems={scrollableListItems} />
);
