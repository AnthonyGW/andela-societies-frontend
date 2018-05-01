import React, { Component } from 'react';
import PropType from 'prop-types';

/**
 * @name PageHeader
 * @summary Renders a page's Header
 * @extends React.Component
 */
class PageHeader extends Component {
  /**
    * @name propTypes
    * @type {PropType}
    * @param {Object} propTypes - React PropTypes
    * @property {String} title - The title of the page
  */
  static propTypes = {
    title: PropType.string.isRequired,
    filterActivities: PropType.func.isRequired,
    selectedStatus: PropType.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedStatus: 'All',
      showFilterOptionsDropdown: false,
      statuses: ['All', 'In review', 'Pending', 'Rejected', 'Approved'],
      activeClass: 'filterOptions__option--active',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedStatus: nextProps.selectedStatus,
    });
  }

  /**
   * @name getDropdownClassName
   * @summary Returns className from dropdown
   * @param {boolean} isActive Whether or not to show the dropdown
   * @param {array[string]} classList Other values for the className
   * @returns {String}
   */
  getDropdownClassName = (isActive, classList) => (
    `${classList.join(' ')} ${isActive ? 'filterOptions__dropdown--active' : ''}`
  );
  /**
   * @name createFilterOptionsButtonClickHandler
   * @summary Creates event handler for when filter button is clicked
   * @returns {function} Toggles filter options dropdown
   */
  createFilterOptionsButtonClickHandler = () => () => {
    this.setState(prevState => ({
      showFilterOptionsDropdown: !prevState.showFilterOptionsDropdown,
    }));
  };

  render() {
    const {
      selectedStatus,
      statuses,
      showFilterOptionsDropdown,
      activeClass,
    } = this.state;
    return (
      <header className='pageHeader'>
        <h1 className='pageTitle'>{this.props.title}</h1>
        <div className='filterOptions'>
          <button
            className='filterOptions__button'
            onClick={this.createFilterOptionsButtonClickHandler()}
          >
            {selectedStatus}
          </button>
          <div className={this.getDropdownClassName(
            showFilterOptionsDropdown,
            ['filterOptions__dropdown'],
          )}
          >
            {
              statuses.map(status => (
                <div
                  key={status}
                  onMouseDown={e => this.props.filterActivities(e)}
                  className={`filterOptions__option ${selectedStatus === status ? activeClass : ''}`}
                  role='button'
                  tabIndex='0'
                >
                  {status}
                </div>
              ))
            }
          </div>
        </div>
      </header>
    );
  }
}

export default PageHeader;
