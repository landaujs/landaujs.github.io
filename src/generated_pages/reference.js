import React, { Component } from 'react'
import Link from 'gatsby-link'

export class ReferencePage extends Component {
  renderPropDocumentation = (key, data) => {
    const renderDescription = (description) => {
      if (!description) {
        return null;
      }

      return (
        <span>
        {description}<br/><br/>
        </span>
      );
    }
    const renderRequired = (required) => {
      if (required) {
        return (<strong>Yes</strong>);
      }
      return (<strong>No</strong>);
    };

    return (
      <div
        key={key}
        style={{
          marginBottom: '2rem',
        }}
      >
        <code className="prop-reference__title">{key}</code><br/>
        <br/>
        {renderDescription(data.description)}
        Required: {renderRequired(data.required)}<br/>
        Type: <code>{data.flowType.raw}</code><br/>
      </div>
    );
  }

  renderComponentDocumentation = (title, data) => {
    return (
      <div key={title}>
      <h2>{title}</h2>
      <h3>Props</h3>
      {
        Object.keys(data.props || {}).map((key) => (
          this.renderPropDocumentation(key, data.props[key])
        ))
      }
      </div>
    );
  }

  render() {
    const title = this.props.title || this.props.pathContext.title;
    const data = this.props.data || this.props.pathContext.data;

    return this.renderComponentDocumentation(title, data);
  }
}

export default ReferencePage;

