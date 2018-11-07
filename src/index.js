import Global from './components/Global';
import SingleSelect from './components/Select/SingleSelect';
import MultipleSelect from './components/Select/MultipleSelect';
import TimeSpanDisplay from './components/TimeSpanDisplay';
import Button from './components/Button';
import Grid from './components/Grid';
import ComposedTabs from './components/Tabs';
import Text from './components/Text';
import Indicator from './components/Checkbox/Indicator';
import Input from './components/Input';
import InputFeedback from './components/InputFeedback';
import InputGroup from './components/InputGroup';
import Label from './components/Label';
import MaskedInput from './components/MaskedInput';
import Spacing from './components/Spacing';
import ComposedChart from './components/Graph/ComposedChart';
import Line from './components/Graph/Line';
import Area from './components/Graph/Area';
import LinearGradient from './components/Graph/LinearGradient';
import Heading from './components/Heading';
import Spinner from './components/Spinner';
import Switch from './components/Switch';
import Tooltip from './components/Tooltip';
import Responsive from './components/Responsive';
import Icons from './components/Icons';
import RadioButtonGroup from './components/RadioButtonGroup';
import RadioButton from './components/RadioButtonGroup/RadioButton';
import Drawer from './components/Drawer';
import Accordion from './components/Accordion';
import AccordionItem from './components/Accordion/AccordionItem';
import Avatar from './components/Avatar';
import IDCard from './components/IDCard';
import { Modal } from './components/Modal';
import { Hr } from './components/Hr';
import { TextArea } from './components/TextArea';
import * as MASKS from './components/MaskedInput/constants';
import * as Themes from './themes';
import { CardinalThemeProvider as ThemeProvider } from './themes/Provider';

export default {
  Avatar,
  IDCard,
  Drawer,
  SingleSelect,
  MultipleSelect,
  ComposedTabs,
  TimeSpanDisplay,
  Button,
  Global,
  Themes,
  Indicator,
  Text,
  Input,
  InputGroup,
  InputFeedback,
  Label,
  MaskedInput,
  Spinner,
  Spacing,
  Heading,
  MASKS,
  ComposedChart,
  Line,
  Area,
  LinearGradient,
  Tooltip,
  Switch,
  Responsive,
  RadioButtonGroup,
  RadioButton,
  Icons,
  Accordion,
  AccordionItem,
  ThemeProvider,
  Modal,
  Hr,
  TextArea,
  ...Grid,
};
