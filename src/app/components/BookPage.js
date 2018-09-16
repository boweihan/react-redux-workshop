import React from 'react';

// redux imports
import { connect } from 'react-redux';
import { loadUsersAndBooks, selectUser, checkoutBook } from '../actions';

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
            books={this.props.books}
            checkoutBook={this.props.checkoutBook}
          />
          <BookList books={this.props.booksForUser} />
        </div>
      </div>
    );
  }
}

const getBooksForUser = (books, user) => {
  return books.filter(book => {
    return books.checkedOutBy && books.checkedOutBy.id === user.id;
  });
};

const mapStateToProps = state => ({
  books: state.books,
  users: state.users,
  booksForUser: getBooksForUser(state.books, state.users.selectedUser),
});

const mapDispatchToProps = dispatch => ({
  loadUsersAndBooks: () => dispatch(loadUsersAndBooks()),
  selectUser: () => dispatch(selectUser()),
  checkoutBook: () => dispatch(checkoutBook()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
