import React from 'react';

// redux imports
import { connect } from 'react-redux';
import { loadBooks, loadUsers, selectUser, checkoutBook } from '../actions';

// components
import Header from './Header';
import BookList from './BookList';

class BookPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BookList
          books={this.props.books}
          checkoutBook={this.props.checkoutBook}
        />
        <BookList books={this.props.booksForUser} />
      </div>
    );
  }
}

const getBooksForUser = (books, user) => {
  return books.filter(book => {
    return books.checkedOutBy.id === user.id;
  });
};

const mapStateToProps = state => ({
  books: state.books,
  users: state.users,
  booksForUser: getBooksForUser(state.books, state.users.selectedUser),
});

const mapDispatchToProps = dispatch => ({
  loadBooks: () => dispatch(loadBooks()),
  loadUsers: () => dispatch(loadUsers()),
  selectUser: () => dispatch(selectUser()),
  checkoutBook: () => dispatch(checkoutBook()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
