/*******************************************************************************
 * Rails Content Assist Plugin for Eclipse Orion
 * Author: Maciej Bendkowski <maciej.bendkowski@gmail.com>
 *******************************************************************************/
 
 /**
 * Content assist for Ruby on Rails.
 * UrlHelper content provider.
 */
var UrlHelperContentProvider = (function() {
	
	function UrlHelperContentProvider() {}
	
	UrlHelperContentProvider.prototype = {
		computeProposals: function(buffer, offset, context) {
			var keywords = [];
			var prefix = context.prefix;
			
			/* link_to helper */
			if("link_to".indexOf(prefix) === 0){
				var proposal = "link_to(*args, &block)";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "link_to - rails url helper",
					positions : [{offset: offset + proposal.indexOf("*args"), length: "*args".length},
								{offset: offset + proposal.indexOf("&block"), length: "&block".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* mail_to helper */
			if("mail_to".indexOf(prefix) === 0){
				var proposal = "mail_to(email_address, name = nil, html_options = {})";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "mail_to - rails url helper",
					positions : [{offset: offset + proposal.indexOf("email_address"), length: "email_address".length},
								{offset: offset + proposal.indexOf("name = nil"), length: "name = nil".length},
								{offset: offset + proposal.indexOf("html_options = {}"), length: "html_options = {}".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* url_for helper */
			if("url_for".indexOf(prefix) === 0){
				var proposal = "url_for(options = {})";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "url_for - rails url helper",
					positions : [{offset: offset + proposal.indexOf("options = {}"), length: "options = {}".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			return keywords;
		}
	};

	return UrlHelperContentProvider;
}());