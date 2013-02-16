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
			var whitespace = this._leadingWhitespace(buffer, offset);
			var prefix = context.prefix;
			var keywords = [];
			
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
			
			/* match helper */
			if("match".indexOf(prefix) === 0){
				var proposal = "match :url => :controller";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "match - rails routing helper",
					positions : [{offset: offset + proposal.indexOf(":url"), length: ":url".length},
								{offset: offset + proposal.indexOf(":controller"), length: ":controller".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* resource helper */
			if("resource".indexOf(prefix) === 0){
				var proposal = "resource :name";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "resource - rails routing helper",
					positions : [{offset: offset + proposal.indexOf(":name"), length: ":name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* namespace helper */
			if("namespace".indexOf(prefix) === 0){
				var proposal = "namespace :name do\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "namespace - rails routing helper",
					positions : [{offset: offset + proposal.indexOf(":name"), length: ":name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* scope helper */
			if("scope".indexOf(prefix) === 0){
				var proposal = "scope :name do\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "scope - rails routing helper",
					positions : [{offset: offset + proposal.indexOf(":name"), length: ":name".length}],
					escapePosition : offset + proposal.length
				});
			}
			
			/* member helper */
			if("member".indexOf(prefix) === 0){
				var proposal = "member do\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "member - rails routing helper",
					escapePosition : offset + proposal.length - 4 - whitespace.length
				});
			}
			
			/* collection helper */
			if("collection".indexOf(prefix) === 0){
				var proposal = "collection do\n" + whitespace + "\t\n" + whitespace + "end";
				proposal = proposal.substring(prefix.length, proposal.length);
				
				keywords.push({
					proposal : proposal,
					description : "collection - rails routing helper",
					escapePosition : offset + proposal.length - 4 - whitespace.length
				});
			}
			
			return keywords;
		},
		
		/**
		 * Returns a string of all the whitespace at the start of the current line.
		 * @param {String} buffer The document
		 * @param {Integer} offset The current selection offset
		 */
		_leadingWhitespace : function(buffer, offset) {
			var whitespace = "";
			offset = offset-1;
			while (offset > 0) {
				var c = buffer.charAt(offset--);
				if (c === '\n' || c === '\r') {
					//we hit the start of the line so we are done
					break;
				}
				if (/\s/.test(c)) {
					//we found whitespace to add it to our result
					whitespace = c.concat(whitespace);
				} else {
					//we found non-whitespace, so reset our result
					whitespace = "";
				}
			}
			return whitespace;
		}
	};

	return UrlHelperContentProvider;
}());