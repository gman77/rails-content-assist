/*******************************************************************************
 * Rails Content Assist Plugin for Eclipse Orion
 * Author: Maciej Bendkowski <maciej.bendkowski@gmail.com>
 *******************************************************************************/

/**
 * Content assist for Ruby on Rails.
 */
var RailsContentAssistProvider = (function() {

	function RailsContentAssistProvider() {}
	
	RailsContentAssistProvider.prototype = {
		computeProposals: function(buffer, offset, context) {
			
			/* ruby restricted keywords */
			var rubyKeywords = ["BEGIN","END","__ENCODING__","__END__","__FILE__","__LINE__","alias","and","begin",
				"break","case","class","def","defined?","do","else","elsif","end","ensure","false","for",
				"if","in","module","next","nil","not","or","redo","rescue","retry","return","self","super",
				"then","true","undef","unless","until","when","while","yield"];
				
			/* rails restricted keywords */
			var railsKeywords = ["ADDITIONAL_LOAD_PATHS","ARGF","ARGV","ActionController","ActionView","ActiveRecord",
			    "ArgumentError","Array","BasicSocket","Benchmark","Bignum","Binding","CGI","CGIMethods","CROSS_COMPILING",
			    "Class","ClassInheritableAttributes","Comparable","ConditionVariable","Config","Continuation","DRb","DRbIdConv",
			    "DRbObject","DRbUndumped","Data","Date","DateTime","Delegater","Delegator","Digest","Dir","ENV","EOFError","ERB",
			    "Enumerable","Errno","Exception","FALSE","FalseClass","Fcntl","File","FileList","FileTask","FileTest","FileUtils",
			    "Fixnum","Float","FloatDomainError","GC","Gem","GetoptLong","Hash","IO","IOError","IPSocket","IPsocket","IndexError",
			    "Inflector","Integer","Interrupt","Kernel","LN_SUPPORTED","LoadError","LocalJumpError","Logger","Marshal","MatchData",
			    "MatchingData","Math","Method","Module","Mutex","Mysql","MysqlError","MysqlField","MysqlRes","NIL","NameError","NilClass",
			    "NoMemoryError","NoMethodError","NoWrite","NotImplementedError","Numeric","OPT_TABLE","Object","ObjectSpace","Observable",
			    "Observer","PGError","PGconn","PGlarge","PGresult","PLATFORM","PStore","ParseDate","Precision","Proc","Process","Queue",
			    "RAKEVERSION","RELEASE_DATE","RUBY","RUBY_PLATFORM","RUBY_RELEASE_DATE","RUBY_VERSION","Rack","Rake","RakeApp","RakeFileUtils",
			    "Range","RangeError","Rational","Regexp","RegexpError","Request","RuntimeError","STDERR","STDIN","STDOUT","ScanError",
			    "ScriptError","SecurityError","Signal","SignalException","SimpleDelegater","SimpleDelegator","Singleton","SizedQueue",
			    "Socket","SocketError","StandardError","String","StringScanner","Struct","Symbol","SyntaxError","SystemCallError",
			    "SystemExit","SystemStackError","TCPServer","TCPSocket","TCPserver","TCPsocket","TOPLEVEL_BINDING","TRUE","Task","Text",
			    "Thread","ThreadError","ThreadGroup","Time","Transaction","TrueClass","TypeError","UDPSocket","UDPsocket","UNIXServer",
			    "UNIXSocket","UNIXserver","UNIXsocket","UnboundMethod","Url","VERSION","Verbose","YAML","ZeroDivisionError"];
			    
			/* magic field names */
			var magicFieldNames = ["created_at","created_on","updated_at","updated_on","lock_version","type","id","position",
				"parent_id","lft","rgt","quote_value","template"];
			
			var proposals = [];
			var prefix = context.prefix;
			
			/* insert ruby restricted keywords */
			for(var i=0; i<rubyKeywords.length; ++i){
				var keyword = rubyKeywords[i];
				if(keyword.indexOf(prefix) === 0){
					proposals.push({
						proposal : keyword,
						description : keyword + " - ruby restricted keyword"
					});
				}
			}
			
			/* insert rails restricted keywords */
			for(var i=0; i<railsKeywords.length; ++i){
				var keyword = railsKeywords[i];
				if(keyword.indexOf(prefix) === 0){
					proposals.push({
						proposal : keyword,
						description : keyword + " - rails restricted keyword"
					});
				}
			}
			
			/* magic field names */
			for(var i=0; i<magicFieldNames.length; ++i){
				var keyword = magicFieldNames[i];
				if(keyword.indexOf(prefix) === 0){
					proposals.push({
						proposal : keyword,
						description : keyword + " - magic field name"
					});
				}
			}
			
			return proposals;
		}
	};
	return RailsContentAssistProvider;
}());