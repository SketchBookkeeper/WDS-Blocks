const PostOutput = ( props ) => {
	return (
		JSON.parse( props.attributes.selectedPostsJSON ).length > 0 ? (
			JSON.parse( props.attributes.selectedPostsJSON ).map( ( post ) =>
				<li
					className="column"
					id={ `post-${ post.id }` }
					key={ `post-${ post.id }` }
				>
					{
						post._embedded[ 'wp:featuredmedia' ] ? (
							<img
								src={ post._embedded[ 'wp:featuredmedia' ][ 0 ][ 'source_url' ] }
								alt=""
							/>
						) : (
							null
						)
					}
					<h3 className="h1">{ post.title.rendered }</h3>
					<div dangerouslySetInnerHTML={ { __html: post.excerpt.rendered } } />
				</li>
			)
		) : (
			null
		)
	);
};

export default PostOutput;
