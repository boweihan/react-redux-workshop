import React from 'react';

// redux imports
import { connect } from 'react-redux';

// action imports
import { fetchUsers, fetchBooks, selectUser } from '../actions';

// selector imports
import {
  getBooksForUser,
  getAvailableBooks,
  getCheckedOutBooks,
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
  isLoading: state.users.isLoading || state.books.isLoading,
  selectedUser: state.users.selectedUser,
  users: state.users.list,
  booksForUser: getBooksForUser(state.books, state.users.selectedUser),
  availableBooks: getAvailableBooks(state.books),
  checkedOutBooks: getCheckedOutBooks(state.books, state.users.selectedUser),
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
  selectUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookPage);
