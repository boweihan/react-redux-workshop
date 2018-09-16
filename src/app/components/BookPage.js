import React from 'react';

// redux imports
import { connect } from 'react-redux';

// action imports
import {
  loadUsersAndBooks,
  selectUser,
  checkoutBook,
  checkinBook,
} from '../actions';

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
            checkoutBook={this.props.checkoutBook}
          />
          <BookList
            books={this.props.booksForUser}
            heading="Your Books"
            checkinBook={this.props.checkinBook}
          />
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
  users: state.users.list,
  selectedUser: state.users.selectedUser,
  booksForUser: getBooksForUser(state.books, state.users.selectedUser),
  availableBooks: getAvailableBooks(state.books),
  checkedOutBooks: getCheckedOutBooks(state.books, state.users.selectedUser),
});

const mapDispatchToProps = dispatch => ({
  loadUsersAndBooks: () => dispatch(loadUsersAndBooks()),
  selectUser: id => dispatch(selectUser(id)),
  checkoutBook: (book, user) => dispatch(checkoutBook(book, user)),
  checkinBook: book => dispatch(checkinBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
