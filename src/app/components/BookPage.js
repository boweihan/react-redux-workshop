import React from 'react';

// redux imports
import { connect } from 'react-redux';

// action imports
import { loadUsersAndBooks, selectUser, checkoutBook } from '../actions';

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
    this.props.loadUsersAndBooks();
  }

  render() {
    return (
      <div>
        <Header />
        <div style={styles.book_lists}>
          <BookList
            books={this.props.availableBooks}
            checkoutBook={this.props.checkoutBook}
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
  }
}

const mapStateToProps = state => ({
  users: state.users,
  booksForUser: getBooksForUser(state.books, state.users.selectedUser),
  availableBooks: getAvailableBooks(state.books),
  checkedOutBooks: getCheckedOutBooks(state.books, state.users.selectedUser),
});

const mapDispatchToProps = dispatch => ({
  loadUsersAndBooks: () => dispatch(loadUsersAndBooks()),
  selectUser: () => dispatch(selectUser()),
  checkoutBook: () => dispatch(checkoutBook()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
