import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { articleFetch } from '../../redux/actions/ArticleActions/articles.actions';
import PopularComponent from '../../components/Popular';
import ArticlesListing from '../../components/ArticlesListing';

class ArticlesView extends Component {
  componentDidMount() {
    const { getArticles } = this.props;
    getArticles();
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { articles} = this.props;
    return (
      <div>
        <PopularComponent />
        <ArticlesListing articles={articles.data} />
      </div>
    );
  }
}

const mapStateToProps = ({ articles }) => ({
  articles,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getArticles: articleFetch,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesView);
