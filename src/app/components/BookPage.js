import React from 'react';

// redux imports
import { connect } from 'react-redux';

// action imports
import { fetchUsers, fetchBooks, fetchCheckOuts, selectUser } from '../actions';

// selector imports
import {
  getAvailableBooks,
  getBooksCheckedOutByCurrentUser,
  getBooksCheckedOutByOtherUsers,
} from '../reducers/books';

// components
import Header from './Header';
import BookList from './BookList';

const styles = {
  book_lists: {
    display: 'flex',
    flexDirection: 'row',
  },
};

class BookPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchBooks();
    this.props.fetchCheckOuts();
  }

  render() {
    let elements = this.props.isLoading ? (
      <span>Loading...</span>
    ) : (
      <div>
        <Header
          users={this.props.users}
          selectedUser={this.props.selectedUser}
          selectUser={this.props.selectUser}
          heading="Vena Library"
        />
        <div style={styles.book_lists}>
          <BookList
            books={this.props.availableBooks}
            selectedUser={this.props.selectedUser}
            heading="Available Books"
          />
          <BookList books={this.props.booksForUser} heading="Your Books" />
        </div>
        <BookList
          books={this.props.checkedOutBooks}
          heading="Checked Out By Others"
        />
      </div>
    );

    return elements;
  }
}

const mapStateToProps = state => ({
  isLoading:
    state.users.isLoading || state.books.isLoading || state.checkOuts.isLoading,
  selectedUser: state.users.selectedUser,
  users: state.users.list,
  availableBooks: getAvailableBooks(state),
  booksForUser: getBooksCheckedOutByCurrentUser(state),
  checkedOutBooks: getBooksCheckedOutByOtherUsers(state),
});

// These two mapDispatchToProps variables do the exact same thing. The second is a more succint syntax.
// const mapDispatchToProps = dispatch => ({
//   fetchBooks: () => dispatch(fetchBooks()),
//   fetchUsers: () => dispatch(fetchUsers()),
//   selectUser: id => dispatch(selectUser(id)),
// });

// Often, you will see this object instantiated inline in connect function call.
const mapDispatchToProps = {
  fetchUsers,
  fetchBooks,
  fetchCheckOuts,
  selectUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookPage);
