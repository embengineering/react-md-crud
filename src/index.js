import BaseComponent from './components/BaseComponent';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import Toastr from './components/Toastr';
import ConfirmationModal from './components/ConfirmationModal';

import Actions from './actions';
import Constants from './constants';
import Stores from './stores';
import Mixins from './mixins';
import Utils from './utils';
import Config from './config';

export default {
	BaseComponent
  ,EmployeeList
  ,EmployeeForm
  ,Toastr
  ,ConfirmationModal

  ,Action: Actions
  ,Constant: Constants
  ,Store: Stores
  ,Mixin: Mixins
  ,Util: Utils
  
  ,Config
};